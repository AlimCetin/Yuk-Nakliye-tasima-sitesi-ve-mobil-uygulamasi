package com.alicetin.nakliye.business.services;


// D: Dto
// E: Entity
public interface ICarrierServices<D,E>{

    // INJECTION

    // Model Mapper
    public D entityToDto(E e);
    public E dtoToEntity(D d);

    /////////////////////////////////////////////////
    // C R U D
    // CREATE
    public D carrierRuoteCreate(D d);
} //end interface
