package com.alicetin.nakliye.data.repository;


import com.alicetin.nakliye.data.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// 3 2 1 8

// CrudRepository
// JpaRepository
// PagingAndSortingRepository
@Repository
public interface IUserRepository extends CrudRepository<UserEntity,Long> {
    Iterable<UserEntity> findByUserEmailAndUserPassword(String userEmail, String userPassword);

} //end interface
