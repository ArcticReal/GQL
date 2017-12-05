
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductPriceAutoNotice = new GraphQLObjectType({
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

export {ProductPriceAutoNotice};
    