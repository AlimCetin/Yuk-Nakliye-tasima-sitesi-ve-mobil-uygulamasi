package com.alicetin.nakliye.business.services;

import java.util.List;

// D: Dto
// E: Entity
public interface IUserServices<D,E>{

    // INJECTION

    // Model Mapper
    public D entityToDto(E e);
    public E dtoToEntity(D d);

    ////////////////////////////////////////////////////////////
    // LOGIN
    // FIND E mail
    public List<D> userControl(String userEmail,String userPassword);

    ////////////////////////////////////////////////////////////
    //  REGISTER C R U D
    // CREATE
    public D userServiceCreate(D d);

} //end interface
