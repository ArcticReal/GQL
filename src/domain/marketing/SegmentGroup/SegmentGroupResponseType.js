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

const SegmentGroupResponseType = new GraphQLObjectType({
  name: 'SegmentGroupResponseType',
  description: 'response type for SegmentGroup',

  fields: () => ({
    description: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString},
    segmentGroupTypeId: {type: GraphQLString}
  })
});

export {SegmentGroupResponseType};
    