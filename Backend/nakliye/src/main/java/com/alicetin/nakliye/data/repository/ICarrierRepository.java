package com.alicetin.nakliye.data.repository;


import com.alicetin.nakliye.data.entity.CarrierEntity;
import com.alicetin.nakliye.data.entity.CustomerEntity;
import com.alicetin.nakliye.data.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// 3 2 1 8

// CrudRepository
// JpaRepository
// PagingAndSortingRepository
@Repository
public interface ICarrierRepository extends CrudRepository<CarrierEntity,Long> {
    Iterable<CarrierEntity> findBycarrierId(Long carrierId);
    Iterable<CarrierEntity> findAll();

} //end interface
