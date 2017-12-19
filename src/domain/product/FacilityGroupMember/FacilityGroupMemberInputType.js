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

const FacilityGroupMemberInputType = new GraphQLInputObjectType({
  name: 'FacilityGroupMemberInputType',
  description: 'input type for FacilityGroupMember',

  fields: () => ({
    facilityGroupId: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityGroupMemberInputType};
    