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

const SegmentGroupInputType = new GraphQLInputObjectType({
  name: 'SegmentGroupInputType',
  description: 'input type for SegmentGroup',

  fields: () => ({
    description: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString},
    segmentGroupTypeId: {type: GraphQLString}
  })
});

export {SegmentGroupInputType};
    