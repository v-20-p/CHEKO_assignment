package com.khalid.CHEKO.repository;

import com.khalid.CHEKO.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {

    default List<Menu> searchMenu(String category, String keyword) {
        String searchKeyword = keyword == null ? "" : keyword;

        if (category == null) {
            return findByNameOrDescription(searchKeyword);
        } else {
            return findByCategoryAndNameOrDescription(category, searchKeyword);
        }
    }

    @Query("SELECT m FROM Menu m WHERE m.category = :category AND " +
            "(m.name LIKE %:keyword% OR m.description LIKE %:keyword%)")
    List<Menu> findByCategoryAndNameOrDescription(
            @Param("category") String category,
            @Param("keyword") String keyword
    );

    @Query("SELECT m FROM Menu m WHERE " +
            "m.name LIKE %:keyword% OR m.description LIKE %:keyword%")
    List<Menu> findByNameOrDescription(@Param("keyword") String keyword);
}