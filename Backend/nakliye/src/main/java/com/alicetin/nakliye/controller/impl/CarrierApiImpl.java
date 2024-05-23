package com.alicetin.nakliye.controller.impl;

import com.alicetin.nakliye.business.dto.CarrierDto;
import com.alicetin.nakliye.business.services.ICarrierServices;
import com.alicetin.nakliye.controller.ICarrierApi;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// LOMBOK
@RequiredArgsConstructor //ınjection
@Log4j2

// API
@RestController
//v1.0.0       1: major version 0: minor 0: patch(yama)
@RequestMapping("/api/v1.0.0/carriers")
@CrossOrigin // CORSS Hatası almamak için
//Dış dünyaya açılan kapı
public class CarrierApiImpl implements ICarrierApi<CarrierDto> {

    // INJECTION
    private final ICarrierServices iCarrierServices;
 
    //Create
    @Override
    @PostMapping("/create")
    public ResponseEntity<?> carrierRuoteCreate(@Valid @RequestBody CarrierDto carrierDtoDto) {
            return ResponseEntity.ok(iCarrierServices.carrierRuoteCreate(carrierDtoDto)) ;
        }

} //end class
