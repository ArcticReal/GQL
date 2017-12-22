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

const FacilityGroupResponseType = new GraphQLObjectType({
  name: 'FacilityGroupResponseType',
  description: 'response type for FacilityGroup',

  fields: () => ({
    description: {type: GraphQLString},
    facilityGroupId: {type: GraphQLString},
    facilityGroupName: {type: GraphQLString},
    facilityGroupTypeId: {type: GraphQLString},
    primaryParentGroupId: {type: GraphQLString}
  })
});

export {FacilityGroupResponseType};
    