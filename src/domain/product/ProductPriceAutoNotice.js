
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductPriceAutoNoticeType = new GraphQLObjectType({
  name: 'ProductPriceAutoNoticeType',
  description: 'Type for ProductPriceAutoNotice in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    runDate: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    productPriceNoticeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPriceAutoNoticeType};
    




const ProductPriceAutoNoticeInputType = new GraphQLInputObjectType({
  name: 'ProductPriceAutoNoticeInputType',
  description: 'input type for ProductPriceAutoNotice',

  fields: () => ({
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productPriceNoticeId: {type: GraphQLString},
    runDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPriceAutoNoticeInputType};
    