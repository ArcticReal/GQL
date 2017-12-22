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

const FacilityTypeResponseType = new GraphQLObjectType({
  name: 'FacilityTypeResponseType',
  description: 'response type for FacilityType',

  fields: () => ({
    description: {type: GraphQLString},
    facilityTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {FacilityTypeResponseType};
    