import { Component, OnInit } from '@angular/core';
import { Product } from '../dashboard/dashboard.component';
import { ProductReviewService } from '../product-review.service';
import { User } from '../user-details/user-details.component';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {

  productReview:ProductReview;
  productReview2:ProductReview = new ProductReview();
  r : Review = new Review();
  message : String;
  constructor(private productReviewService:ProductReviewService) { }

  ngOnInit(): void {
    this.fetchReview();
  }

  fetchReview(){
    this.productReviewService.fetchProductReview(Number(sessionStorage.getItem('productId'))).subscribe(response => {
       //alert(JSON.stringify(response));
      this.productReview=response;
      console.log(response.review);
    })
  }

  addProductReview(){
    //this.productReview2.user.userId = Number(sessionStorage.getItem('customerId'));
    //this.productReview2.product.productId = Number(sessionStorage.getItem('productId'));
    this.r.productReview = this.productReview2;
    this.r.productId = Number(sessionStorage.getItem('productId'));
    this.r.userId = Number(sessionStorage.getItem('customerId'));
    this.productReviewService.addReview(this.r).subscribe(response =>{
      alert(JSON.stringify(response));
      // console.log(this.productReview2.rating);
      this.message = "Review added successfully"; 
    })
  }

}
export class ProductReview{

  reviewId:Number;
  review:String;
  rating:Number;
  user:User;
  product:Product;
  
}

export class Review {
  productReview : ProductReview;
  userId:Number;
  productId : Number;
}