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

const FacilityGroupRoleInputType = new GraphQLInputObjectType({
  name: 'FacilityGroupRoleInputType',
  description: 'input type for FacilityGroupRole',

  fields: () => ({
    facilityGroupId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {FacilityGroupRoleInputType};
    