<?php

class Cnx{
	
	private $servidor;
	private $usuario;
	private $contrasena;
	private $nombreBase;
	
	public function Cnx($servidor = "localhost",$usuario="yakkacom_admin",$contrasena="WNCp1PTeQQ5s"){
		$this->servidor = $servidor;
		$this->usuario = $usuario;
		$this->contrasena = $contrasena;	
	}
	
	public function setNombreBase($nombreBase){$this->nombreBase = $nombreBase;}
	public function getNombreBase(){return $this->nombreBase;}

	public function seleccionarBase($nombreBase){
		$this->setNombreBase($nombreBase);
		return mysql_select_db($this->getNombreBase());
	}
	
	public function conectar($nombreBase=""){
		$cnx = mysql_connect($this->servidor,$this->usuario,$this->contrasena);	
		$cnx = mysql_query("SET NAMES 'utf8'");
		if(!empty($nombreBase)){$this->seleccionarBase($nombreBase);}
		return $cnx;
	}
	
	public function persistir(){
		return mysql_pconnect($this->servidor,$this->usuario,$this->contrasena);	
	}
	
}

?>