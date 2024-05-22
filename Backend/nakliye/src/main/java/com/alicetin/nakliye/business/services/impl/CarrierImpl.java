package com.alicetin.nakliye.business.services.impl;

import com.alicetin.nakliye.bean.ModelMapperBeanClass;
import com.alicetin.nakliye.business.dto.CarrierDto;
import com.alicetin.nakliye.business.dto.CustomerDto;
import com.alicetin.nakliye.business.services.ICarrierServices;
import com.alicetin.nakliye.data.entity.CarrierEntity;
import com.alicetin.nakliye.data.repository.ICarrierRepository;
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
public class CarrierImpl implements ICarrierServices<CarrierDto, CarrierEntity> {

    // Injection
    private final ICarrierRepository iCarrierRepository;
    private final ModelMapperBeanClass modelMapperBeanClass;

    @Override
    public CarrierDto entityToDto(CarrierEntity carrierEntity) {
        return modelMapperBeanClass.modelMapperMethod().map(carrierEntity, CarrierDto.class);
    }

    @Override
    public CarrierEntity dtoToEntity(CarrierDto carrierDto) {
        return modelMapperBeanClass.modelMapperMethod().map(carrierDto, CarrierEntity.class);
    }

    // create
    @Override
    @Transactional
    public CarrierDto carrierRuoteCreate(CarrierDto carreierDto) {
        if (carreierDto != null) {
            CarrierEntity createEntity = dtoToEntity(carreierDto);
            iCarrierRepository.save(createEntity);
            // Dto Set(id ve date)
            carreierDto.setId(createEntity.getId());
            carreierDto.setSystemDate(createEntity.getSystemDate());
        }
        return carreierDto;
    }
} // end class
