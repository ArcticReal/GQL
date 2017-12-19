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

const ContentRevisionItemInputType = new GraphQLInputObjectType({
  name: 'ContentRevisionItemInputType',
  description: 'input type for ContentRevisionItem',

  fields: () => ({
    contentId: {type: GraphQLString},
    contentRevisionSeqId: {type: GraphQLString},
    itemContentId: {type: GraphQLString},
    newDataResourceId: {type: GraphQLString},
    oldDataResourceId: {type: GraphQLString}
  })
});

export {ContentRevisionItemInputType};
    