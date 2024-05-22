package com.alicetin.nakliye.controller;

import org.springframework.http.ResponseEntity;

import java.util.List;

// D: Dto
public interface ICarrierApi<D> {

    // INJECTION

    // Create
    public ResponseEntity<?> carrierRuoteCreate(D d);

} //end interface

