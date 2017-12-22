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

const SegmentGroupTypeResponseType = new GraphQLObjectType({
  name: 'SegmentGroupTypeResponseType',
  description: 'response type for SegmentGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    segmentGroupTypeId: {type: GraphQLString}
  })
});

export {SegmentGroupTypeResponseType};
    