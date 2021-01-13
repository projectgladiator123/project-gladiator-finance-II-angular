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
  
  constructor(private productReviewService:ProductReviewService) { }

  ngOnInit(): void {
    this.fetchReview();
  }

  fetchReview(){
    this.productReviewService.fetchProductReview().subscribe(response => {
       //alert(JSON.stringify(response));
      this.productReview=response;
      console.log(response.review);
    })
  }

  addProductReview(){
    this.productReviewService.addReview(this.productReview2).subscribe(response =>{
      alert(JSON.stringify(response));
      // console.log(this.productReview2.rating);
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