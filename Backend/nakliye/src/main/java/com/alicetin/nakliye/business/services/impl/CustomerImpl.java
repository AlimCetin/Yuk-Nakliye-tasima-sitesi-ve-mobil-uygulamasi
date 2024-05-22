package com.alicetin.nakliye.business.services.impl;

import com.alicetin.nakliye.bean.ModelMapperBeanClass;
import com.alicetin.nakliye.business.dto.CarrierDto;
import com.alicetin.nakliye.business.dto.CustomerDto;
import com.alicetin.nakliye.business.services.ICustomerServices;
import com.alicetin.nakliye.data.entity.CarrierEntity;
import com.alicetin.nakliye.data.entity.CustomerEntity;
import com.alicetin.nakliye.data.repository.ICarrierRepository;
import com.alicetin.nakliye.data.repository.ICustomerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

// LOMBOK
@RequiredArgsConstructor
@Log4j2

// SERVICE
// Asıl is Yükünü yapan yer
@Service
public class CustomerImpl implements ICustomerServices<CustomerDto, CustomerEntity> {

    // Injection
    private final ICustomerRepository iCustomerRepository;
    private final ICarrierRepository iCarrierRepository;
    private final ModelMapperBeanClass modelMapperBeanClass;

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
    @Override
    public List<CustomerDto> customerFindBycustomerId(Long customerId) {
        Iterable<CustomerEntity> EntityIterable = iCustomerRepository.findBycustomerId(customerId);
        Iterable<CarrierEntity> CarrierEntityIterable = iCarrierRepository.findAll();

        List<CustomerDto> customerDtoList = new ArrayList<>();
         <CustomerEntity> deger;
        for (CustomerEntity entity : EntityIterable) {
            
            deger.setRoute(entity.getRoute());
            System.out.print("--------------------------------------------------------"+deger);
        }

        for (CarrierEntity entity : CarrierEntityIterable) {
            boolean durum = false;
        

            // CarrierDeger[0];
        }

        return entityToDto(deger);
    }

} // end class
