package com.khalid.CHEKO.controller;


import com.khalid.CHEKO.entity.Menu;
import com.khalid.CHEKO.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuController {
    private final MenuService menuService;


    @GetMapping
    public List<Menu> getAllMenu(){
        return menuService.getAllItems();
    }
    @Autowired
    public MenuController(MenuService menu) {
        menuService = menu;
    }
}
