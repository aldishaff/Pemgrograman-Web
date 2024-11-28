<?php
namespace app\Controller;

include "app/Traits/ApiResponseFormatter.php";
include "app/Models/Product.php";

use app\Models\Product;
use app\Traits\ApiResponseFormatter;

class ProductController {
use ApiResponseFormatter;
    public function index()
    {
        // DEFINISI OBJEK MODEL PRODUCT YANG SUDAH DIBU
        $productModel = new Product();
        $response = $productModel->findAll(); 
        // RETURN $response DENGAN MELAKUKAN FORMATTING 
        return $this->apiResponse(200, "success", $response);
    }
    public function getById($id)
    {
        $productModel = new Product();
        $response = $productModel->findById($id);
        return $this->apiResponse(200, "success", $response);
    }
    public function insert(){
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        if(json_last_error()){
            return $this->apiResponse(400, "Error invalid input", null);
        }
        $productModel = new Product();
        $response = $productModel->create([
            "product_name" => $inputData['product_name']
        ]);
        return $this->apiResponse(200, "Success", $response);
    }
    public function update($id){
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        if(json_last_error()){
            return $this->apiResponse(400, "Error invalid input", null);
        }
        $productModel = new Product();
        $response = $productModel->update([
            "product_name" => $inputData['product_name']
        ], $id);
        return $this->apiResponse(200, "Success", $response);
    }
    public function delete($id){
        $productModel = new Product();
        $response = $productModel->delete($id);
        return $this->apiResponse(200, "Success", $response);   
    }
}