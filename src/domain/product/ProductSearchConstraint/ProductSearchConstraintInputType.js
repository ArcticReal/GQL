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

const ProductSearchConstraintInputType = new GraphQLInputObjectType({
  name: 'ProductSearchConstraintInputType',
  description: 'input type for ProductSearchConstraint',

  fields: () => ({
    anyPrefix: {type: GraphQLBoolean},
    anySuffix: {type: GraphQLBoolean},
    constraintName: {type: GraphQLString},
    constraintSeqId: {type: GraphQLString},
    highValue: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    infoString: {type: GraphQLString},
    isAnd: {type: GraphQLBoolean},
    lowValue: {type: GraphQLString},
    productSearchResultId: {type: GraphQLString},
    removeStems: {type: GraphQLBoolean}
  })
});

export {ProductSearchConstraintInputType};
    