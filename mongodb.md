db.purchase_orders.aggregate(
    [
        {$match: {customer:}},
        {$group: {_id:"$customer", total:{$sum:"$total"}}},
        {$sort: {total: -1}}
    ]
)

{ 

      "Code": "AB", 

      "Name": "Alberta", 

      "Taxes": [ 

          { 

              "Code": "GST", 

              "Name": "Goods and Services Tax", 

              "Type": "federal", 

              "Tax": 0.05 

          } 

      ] 

} 


db.createCollection("canada_tax_rates", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
				 required: ["Code", "Name", "Taxes" ],
         properties: {
            Code: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            Name: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            Taxes: {
            bsonType: ["array"],
           
            items: {
                    bsonType: ["object"],
                    required: ["Code", "Name", "Type","Tax"],
                    additionalProperties: false,
                    description: "'ingredients' must contain the stated fields.",
                    properties: {
                            Code: {
                                bsonType: "string",
                                description: "must be an string and is required"
                            },
                            Name: {
                                bsonType: "string",
                                description: "must be an string and is required"
                            },
                            Type: {
                                bsonType: "string",
                                description: "must be an string and is required"
                            },
                            Tax: {
                                bsonType: "double",
                                description: "must be an string and is required"
                            }
              }
            }
            }
         }
      }
   }
})