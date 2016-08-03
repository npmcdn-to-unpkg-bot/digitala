<?php
defined('BUILD_PATH') || define('BUILD_PATH', '');

if (file_exists( BUILD_PATH . 'vendor/autoload.php')) {
    $loader = include BUILD_PATH . 'vendor/autoload.php';
}

if (class_exists('Zend\Loader\AutoloaderFactory')) {
    return;
}

$zf2Path = false;

if (getenv('ZF2_PATH')) {            // Support for ZF2_PATH environment variable
    $zf2Path = getenv('ZF2_PATH');
} elseif (get_cfg_var('zf2_path')) { // Support for zf2_path directive value
    $zf2Path = get_cfg_var('zf2_path');
}

if ($zf2Path) {
    if (isset($loader)) {
        $loader->add('Zend', $zf2Path);
        $loader->add('ZendXml', $zf2Path);
    } else {
        include $zf2Path . '/Zend/Loader/AutoloaderFactory.php';
        Zend\Loader\AutoloaderFactory::factory(array(
            'Zend\Loader\StandardAutoloader' => array(
                'autoregister_zf' => true
            )
        ));
    }
}

if (!class_exists('Zend\Loader\AutoloaderFactory')) {
    throw new RuntimeException('Unable to load ZF2. Run `php composer.phar install` or define a ZF2_PATH environment variable.');
}
