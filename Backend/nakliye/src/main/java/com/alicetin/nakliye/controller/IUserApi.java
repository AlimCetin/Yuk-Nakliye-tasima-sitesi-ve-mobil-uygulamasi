package com.alicetin.nakliye.controller;

import org.springframework.http.ResponseEntity;

import java.util.List;

// D: Dto
public interface IUserApi<D> {

    /////////////////////////////////////////////////////////////
    // LOGIN
    // FIND EMAIL
    public ResponseEntity<?> userServiceControl(String userEmail,String userPassword);

    ////////////////////////////////////////////////////////////
    // C R U D
    // CREATE
    public ResponseEntity<?> userServiceCreate(D d);

} //end interface

