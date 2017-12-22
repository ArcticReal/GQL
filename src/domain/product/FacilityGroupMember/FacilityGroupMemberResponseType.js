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

const FacilityGroupMemberResponseType = new GraphQLObjectType({
  name: 'FacilityGroupMemberResponseType',
  description: 'response type for FacilityGroupMember',

  fields: () => ({
    facilityGroupId: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityGroupMemberResponseType};
    