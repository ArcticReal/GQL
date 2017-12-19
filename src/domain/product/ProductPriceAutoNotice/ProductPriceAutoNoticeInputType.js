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
    