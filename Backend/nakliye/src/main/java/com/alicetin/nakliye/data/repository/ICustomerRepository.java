package com.alicetin.nakliye.data.repository;


import com.alicetin.nakliye.data.entity.CustomerEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// 3 2 1 8

// CrudRepository
// JpaRepository
// PagingAndSortingRepository
@Repository
public interface ICustomerRepository extends CrudRepository<CustomerEntity,Long> {
    Iterable<CustomerEntity> findBycustomerId(Long customerId);
    
} //end interface
