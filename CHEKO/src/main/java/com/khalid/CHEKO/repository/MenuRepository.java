package com.khalid.CHEKO.repository;

import com.khalid.CHEKO.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
}
