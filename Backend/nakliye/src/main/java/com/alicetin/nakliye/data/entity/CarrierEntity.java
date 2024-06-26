package com.alicetin.nakliye.data.entity;

import com.alicetin.nakliye.data.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
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
@Table(name = "carrier")
public class CarrierEntity extends BaseEntity implements Serializable {

    // Serileştirme
    public static final Long serialVersionUID=1L;

    // Global Variable (6)
    // Dikkat: message sonunda boşluk olmasın
    // unique = true,
    @Column(name = "carrier_id")
    protected  Long carrierId;

    @Column(name = "route_list")
    private String [] route;

} //end class
