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

const ContentSearchConstraintResponseType = new GraphQLObjectType({
  name: 'ContentSearchConstraintResponseType',
  description: 'response type for ContentSearchConstraint',

  fields: () => ({
    anyPrefix: {type: GraphQLBoolean},
    anySuffix: {type: GraphQLBoolean},
    constraintName: {type: GraphQLString},
    constraintSeqId: {type: GraphQLString},
    contentSearchResultId: {type: GraphQLString},
    highValue: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    infoString: {type: GraphQLString},
    isAnd: {type: GraphQLBoolean},
    lowValue: {type: GraphQLString},
    removeStems: {type: GraphQLBoolean}
  })
});

export {ContentSearchConstraintResponseType};
    