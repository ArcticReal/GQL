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

const ProductPriceAutoNoticeResponseType = new GraphQLObjectType({
  name: 'ProductPriceAutoNoticeResponseType',
  description: 'response type for ProductPriceAutoNotice',

  fields: () => ({
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productPriceNoticeId: {type: GraphQLString},
    runDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPriceAutoNoticeResponseType};
    