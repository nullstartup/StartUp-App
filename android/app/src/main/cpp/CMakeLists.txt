cmake_minimum_required(VERSION 3.18.1)

# Proje ismi
project(MyNativeApp)

# Kaynak dosyaları ekle
add_library(
    native-lib
    SHARED
    native-lib.cpp
)

# Log kütüphanesini bağlayın
find_library(
    log-lib
    log
)

# Kütüphaneleri linkleyin
target_link_libraries(
    native-lib
    ${log-lib}
)
