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

const ProductFacilityLocationInputType = new GraphQLInputObjectType({
  name: 'ProductFacilityLocationInputType',
  description: 'input type for ProductFacilityLocation',

  fields: () => ({
    facilityId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    minimumStock: {type: GraphQLFloat},
    moveQuantity: {type: GraphQLFloat},
    productId: {type: GraphQLString}
  })
});

export {ProductFacilityLocationInputType};
    