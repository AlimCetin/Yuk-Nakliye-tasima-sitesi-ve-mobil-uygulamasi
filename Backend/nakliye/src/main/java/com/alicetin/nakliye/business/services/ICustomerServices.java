package com.alicetin.nakliye.business.services;

import java.util.List;

// D: Dto
// E: Entity
public interface ICustomerServices<D,E>{

    // INJECTION

    // Model Mapper
    public D entityToDto(E e);
    public E dtoToEntity(D d);
    ////////////////////////////////////////////////////////////
    //  C R U D
    // CREATE
    public D customerRouteCreate(D d);


    // FIND
    public List<D> customerFindBycustomerId(Long customerId);

} //end interface
