<?php
namespace DACore\Upload\Strategy;

abstract class AbstractFileStrategy
{
	public function original($src, $dest)
	{
		copy($src, $dest);
		return true;
	}
}