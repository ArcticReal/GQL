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

const ProductFacilityLocationResponseType = new GraphQLObjectType({
  name: 'ProductFacilityLocationResponseType',
  description: 'response type for ProductFacilityLocation',

  fields: () => ({
    facilityId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    minimumStock: {type: GraphQLFloat},
    moveQuantity: {type: GraphQLFloat},
    productId: {type: GraphQLString}
  })
});

export {ProductFacilityLocationResponseType};
    