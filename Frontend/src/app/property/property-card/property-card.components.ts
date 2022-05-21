import { Component } from "@angular/core";

@Component( {
  selector:'app-property-card',
  templateUrl:`property-card.components.html`,
  styleUrls:[`property-card.components.css`]
})
export class ProperyCardComponent {
  Property:any = {
    "Id":1,
    "Type":"Veg",
    "Price":199,
    "Name":"Veggie Supreme",
    "Size":"Medium",
    "Description":"Paneer, Olives, Pepper and Parmesan Cheese"
  }

}
