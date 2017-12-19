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

const SegmentGroupRoleInputType = new GraphQLInputObjectType({
  name: 'SegmentGroupRoleInputType',
  description: 'input type for SegmentGroupRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString}
  })
});

export {SegmentGroupRoleInputType};
    