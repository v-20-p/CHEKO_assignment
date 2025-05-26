package com.khalid.CHEKO.service;


import com.khalid.CHEKO.entity.Menu;
import com.khalid.CHEKO.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    private final MenuRepository menuRepository;
    @Autowired
    public  MenuService(MenuRepository menu){
        menuRepository=menu;
    }

    public List<Menu> searchMenu(String category, String keyword) {return menuRepository.searchMenu(category, keyword);
    }
}
