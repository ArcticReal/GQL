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

const FacilityGroupTypeResponseType = new GraphQLObjectType({
  name: 'FacilityGroupTypeResponseType',
  description: 'response type for FacilityGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    facilityGroupTypeId: {type: GraphQLString}
  })
});

export {FacilityGroupTypeResponseType};
    