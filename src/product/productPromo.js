import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';

const ProductPromoType = new GraphQLObjectType({
  name: 'ProductPromo',
  description: '...',

  fields: () => ({    	
    productPromoId: { type: GraphQLString },
    promoName: { type: GraphQLString },
    promoText: { type: GraphQLString },
    userEntered: { type: GraphQLBoolean }, 
    showToCustomer: { type: GraphQLBoolean }, 
    requireCode: { type: GraphQLBoolean }, 
    useLimitPerOrder: { type: GraphQLString }, 
    useLimitPerCustomer: { type: GraphQLString }, 
    useLimitPerPromotion: { type: GraphQLString }, 
    billbackFactor: { type: GraphQLString }, 
    overrideOrgPartyId: { type: GraphQLString }, 
    createdDate: { type: GraphQLString }, 
    createdByUserLogin: { type: GraphQLString },
    lastModifiedDate: { type: GraphQLString }, 
    lastModifiedByUserLogin: { type: GraphQLString }
  })
});

export { ProductPromoType };
