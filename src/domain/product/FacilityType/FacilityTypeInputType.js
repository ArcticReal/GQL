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

const FacilityTypeInputType = new GraphQLInputObjectType({
  name: 'FacilityTypeInputType',
  description: 'input type for FacilityType',

  fields: () => ({
    description: {type: GraphQLString},
    facilityTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {FacilityTypeInputType};
    