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

const SegmentGroupClassificationResponseType = new GraphQLObjectType({
  name: 'SegmentGroupClassificationResponseType',
  description: 'response type for SegmentGroupClassification',

  fields: () => ({
    partyClassificationGroupId: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString}
  })
});

export {SegmentGroupClassificationResponseType};
    