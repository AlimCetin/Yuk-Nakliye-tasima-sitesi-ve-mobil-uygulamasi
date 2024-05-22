package com.alicetin.nakliye.controller;

import org.springframework.http.ResponseEntity;

import java.util.List;

// D: Dto
public interface ICustomerApi<D> {



    /////////////////////////////////////////////////////////////
    // LOGIN
    // FIND BY EMAIL
    public ResponseEntity<List<D>> customerFindBycustomerId(Long customerId);

    ////////////////////////////////////////////////////////////

    // C R U D
    // CREATE
    public ResponseEntity<?> customerRouteCreate(D d);


} //end interface

