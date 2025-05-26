package com.khalid.CHEKO.controller;


import com.khalid.CHEKO.entity.Menu;
import com.khalid.CHEKO.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "*")
public class MenuController {
    private final MenuService menuService;

    @GetMapping
    public ResponseEntity<List<Menu>> getMenu(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String filterBy) {
        if (search != null && search.trim().isEmpty()) search = null;
        if (filterBy != null && filterBy.trim().isEmpty()) filterBy = null;

        List<Menu> results = menuService.searchMenu(filterBy, search);
        return ResponseEntity.ok(results);
    }

    @Autowired
    public MenuController(MenuService menu) {
        menuService = menu;
    }
}
