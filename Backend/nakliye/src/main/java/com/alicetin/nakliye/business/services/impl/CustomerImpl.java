package com.alicetin.nakliye.business.services.impl;

import com.alicetin.nakliye.bean.ModelMapperBeanClass;
import com.alicetin.nakliye.business.dto.CarrierDto;
import com.alicetin.nakliye.business.dto.CustFindCarrierDto;
import com.alicetin.nakliye.business.dto.CustomerDto;
import com.alicetin.nakliye.business.services.ICustomerServices;
import com.alicetin.nakliye.data.entity.CarrierEntity;
import com.alicetin.nakliye.data.entity.CustomerEntity;
import com.alicetin.nakliye.data.entity.UserEntity;
import com.alicetin.nakliye.data.repository.ICarrierRepository;
import com.alicetin.nakliye.data.repository.ICustomerRepository;
import com.alicetin.nakliye.data.repository.IUserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

// LOMBOK
@RequiredArgsConstructor
@Log4j2

// SERVICE
// Asıl is Yükünü yapan yer
@Service
public class CustomerImpl implements ICustomerServices<CustomerDto, CustomerEntity, CustFindCarrierDto> {

    // Injection
    private final ICustomerRepository iCustomerRepository;
    private final ICarrierRepository iCarrierRepository;
    private final ModelMapperBeanClass modelMapperBeanClass;
    private final IUserRepository iUserRepository;

    @Override
    public CustomerDto entityToDto(CustomerEntity customerEntity) {
        return modelMapperBeanClass.modelMapperMethod().map(customerEntity, CustomerDto.class);
    }

    @Override
    public CustomerEntity dtoToEntity(CustomerDto customerDto) {
        return modelMapperBeanClass.modelMapperMethod().map(customerDto, CustomerEntity.class);
    }

    // create
    @Override
    @Transactional
    public CustomerDto customerRouteCreate(CustomerDto customerDto) {
        if (customerDto != null) {
            CustomerEntity createEntity = dtoToEntity(customerDto);
            iCustomerRepository.save(createEntity);
            // Dto Set(id ve date)
            customerDto.setId(createEntity.getId());
            customerDto.setSystemDate(createEntity.getSystemDate());
        }
        return customerDto;
    }

    // Find By Id
    @SuppressWarnings("unchecked")
    @Override
    public List<CustFindCarrierDto> customerFindBycustomerId(Long customerId) {
        Iterable<CustomerEntity> EntityIterable = iCustomerRepository.findBycustomerId(customerId);
        Iterable<CarrierEntity> CarrierEntityIterable = iCarrierRepository.findAll();
        List carrierList = new ArrayList();
        for (CarrierEntity entity : CarrierEntityIterable) {
            String[] carrierRoute = entity.getRoute();
            boolean deger = false;
            for (String carRoute : carrierRoute) {
                for (CustomerEntity cusRoutes : EntityIterable) {
                    for (String cusRoute : cusRoutes.getRoute()) {

                        if ((deger == false) && (cusRoute == carRoute)) {
                            deger = true;
                        } else if ((deger == true) && (cusRoute == carRoute)) {
                            carrierList.add(entity.getCarrierId());
                            carrierList.add(entity.getRoute());
                             Optional<UserEntity> userEntityIterable = iUserRepository

                                    .findById(entity.getCarrierId());

                                    UserEntity sss = userEntityIterable.get();
                            carrierList.add(sss.getUserName());
                        }
                    }
                }
            }

        }

        return carrierList;
    }

} // end class
