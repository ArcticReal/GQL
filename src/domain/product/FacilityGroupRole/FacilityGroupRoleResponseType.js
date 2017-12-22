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

const FacilityGroupRoleResponseType = new GraphQLObjectType({
  name: 'FacilityGroupRoleResponseType',
  description: 'response type for FacilityGroupRole',

  fields: () => ({
    facilityGroupId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {FacilityGroupRoleResponseType};
    