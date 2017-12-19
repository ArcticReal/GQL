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

const SegmentGroupTypeInputType = new GraphQLInputObjectType({
  name: 'SegmentGroupTypeInputType',
  description: 'input type for SegmentGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    segmentGroupTypeId: {type: GraphQLString}
  })
});

export {SegmentGroupTypeInputType};
    