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

const SegmentGroupClassificationInputType = new GraphQLInputObjectType({
  name: 'SegmentGroupClassificationInputType',
  description: 'input type for SegmentGroupClassification',

  fields: () => ({
    partyClassificationGroupId: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString}
  })
});

export {SegmentGroupClassificationInputType};
    