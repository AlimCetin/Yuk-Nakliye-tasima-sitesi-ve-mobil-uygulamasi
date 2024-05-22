package com.alicetin.nakliye.data.entity;

import com.alicetin.nakliye.data.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;
import lombok.extern.log4j.Log4j2;

import java.io.Serializable;

// LOMBOK
@Data
@Log4j2
@AllArgsConstructor
@NoArgsConstructor
@Builder

// ENTITY
@Entity
@Table(name = "customer")
public class CustomerEntity extends BaseEntity implements Serializable {

    // Serileştirme
    public static final Long serialVersionUID=1L;

    @Column(name = "customer_id")
    protected  Long customerId;

    @Column(name = "route_list")
    private String [] route;

} //end class
